find . -type f -name "*.d.ts" -exec rm -f {}  \;,
find ./Source -type f -name "*.d.css" -exec rm -f {} \;
find ./src -type f -name "*.css" -exec rm -f {}   \;

find . -type f -name "*.ts" -exec rm -f {}    \;
find ./Source -type f -name "*.css" -exec rm -f {}   \;
find ./src -type f -name "*.css" -exec rm -f {}   \;

find . -type f -name "*.d.ts.map" -exec rm -f {}   \;

find . -type f -name "*.js.map" -exec rm -f {}   \;

rm -r -f ./build
rm -r -f ./Build

rm -r -f ./coverage
rm -r -f ./Coverage

rm -r -f ./.idea
rm -r -f ./.Idea
rm -r -f ./.IDEA

rm -r -f ./.vscode
rm -r -f ./.VSCODE

rm -r -f ./node_modules
rm -r -f ./pnp

rm -r -f ./.Version
