/**
 * @file Stacked notification.
 * @copyright IBM Security 2019, 2021
 */

import { bool, func, node, string } from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import { ToastNotification } from '../Notification';
import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('stacked-notification');

const StackedNotification = ({
  onCloseButtonClick,
  iconDescription,
  className,
  caption,
  subtitle,
  title,
  hideCloseButton,
  statusIconDescription,
  ...other
}) => {
  const classes = classnames(namespace, className);

  return (
    <ToastNotification
      className={classes}
      kind="info"
      notificationType="toast"
      title={title}
      subtitle={subtitle}
      caption={caption}
      iconDescription={iconDescription}
      onClick={onCloseButtonClick}
      hideCloseButton={hideCloseButton}
      statusIconDescription={statusIconDescription}
      {...other}
    />
  );
};

StackedNotification.propTypes = {
  /* Specify the caption. */
  caption: node,

  /* 	Pass in the children that will be rendered within the notification. */
  children: node,

  /* Specify an optional className to be applied to the notification wrapper. */
  className: string,

  /* 	Specify whether the close button should be disabled. */
  hideCloseButton: bool,

  /* Provide a description for "close" icon that can be read by screen readers. */
  iconDescription: string.isRequired,

  /* 	Provide a function that is called when menu is closed. */
  onCloseButtonClick: func,

  /* By default, this value is "alert". You can provide an alternate role if it makes sense for accessibility. */
  role: string,

  /* Provide a description for "status" icon that can be read by screen readers. */
  statusIconDescription: string,

  /* 	Specify the sub-title. */
  subtitle: node.isRequired,

  /* Specify the title. */
  title: string.isRequired,
};

StackedNotification.defaultProps = {
  caption: 'provide a caption',
  children: undefined,
  className: null,
  role: 'alert',
  onCloseButtonClick: () => {},
  hideCloseButton: false,
  statusIconDescription: 'provide a description for the status icon',
};

export default StackedNotification;
