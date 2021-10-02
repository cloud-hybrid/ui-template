// ---------------------------------------------------------------------------------------------------------------------
// Standard Library
// ---------------------------------------------------------------------------------------------------------------------

import * as FS from "fs";
import * as Path from "path";
import * as Runtime from "process";

export const CWD = Runtime.cwd();

// ---------------------------------------------------------------------------------------------------------------------
// Global(s)
// ---------------------------------------------------------------------------------------------------------------------

export const Mapping = new Map();
export const Contents = (_) => {
    return FS.readdirSync(_, {
        withFileTypes: true, encoding: "UTF-8"
    });
};

export const Parse = (directory) => {
    const Data = [];

    Contents(directory).forEach((File) => {
        const Name = File.name;
        const Absolute = FS.realpathSync(Path.join(directory, Name));

        const Type = {
            File: FS.statSync(Absolute).isFile(),
            Directory: FS.statSync(Absolute).isDirectory(),
            Socket: FS.statSync(Absolute).isSocket(),
            Pipe: FS.statSync(Absolute).isFIFO(),
            Device: FS.statSync(Absolute).isBlockDevice(),
            Zip: (Name.slice(Name.length - 3).toLowerCase() === "zip")
        };

        const Properties = {
            Size: FS.statSync(Absolute).size,
            UID: FS.statSync(Absolute).uid,
            Mode: FS.statSync(Absolute).mode
        }

        Data.push({
            Name,
            Path: Absolute,
            Properties,
            Type
        });
    });

    return Data;
};

// ---------------------------------------------------------------------------------------------------------------------
// Exportable
// ---------------------------------------------------------------------------------------------------------------------

export const Blobs = (directory) => Parse(directory);

export const Files = (directory) => Blobs(directory).filter((_) => (_.Type.File === true));
export const Directories = (directory) => Blobs(directory).filter((_) => (_.Type.Directory === true));
export const Sockets = (directory) => Blobs(directory).filter((_) => (_.Type.Socket === true));
export const FIFOs = (directory) => Blobs(directory).filter((_) => (_.Type.Pipe === true));
export const Devices = (directory) => Blobs(directory).filter((_) => (_.Type.Device === true));

export const Zips = (directory) => Blobs(directory).filter((_) => (_.Type.Zip === true));

Mapping.set("Blobs", Blobs);
Mapping.set("Files", Files);
Mapping.set("Directories", Directories);
Mapping.set("Sockets", Sockets);
Mapping.set("FIFOs", FIFOs);
Mapping.set("Devices", Devices);
Mapping.set("Zips", Zips);

export const Walk = (directory) => {
    const Data = {};

    Mapping.forEach(
        (Callable, Key) => {
            Data[Key] = Callable(directory);
        }
    );

    return Data;
};

export const Exports = {
    Blobs,
    Files,
    Directories,
    Sockets,
    FIFOs,
    Devices,
    Zips
};

// ---------------------------------------------------------------------------------------------------------------------
// Module
// ---------------------------------------------------------------------------------------------------------------------

const Module = {
    Walk, Map: Mapping, Exports
};

export default Module;
