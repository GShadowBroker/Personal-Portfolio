---
path: /widget
date: 2021-02-18T22:20:58.814Z
title: Widgets
description: Widgets define the data type and interface for entry fields. Know
  more about them here!
thumbnail: /assets/widgets.png
tag:
  - netlifyCMS
  - widget
  - netlify
  - how-to
---

<!--StartFragment-->

# Widgets

Widgets define the data type and interface for entry fields. Netlify CMS comes with several built-in widgets. Click the widget names in the sidebar to jump to specific widget details. We’re always adding new widgets, and you can also [create your own](https://www.netlifycms.org/docs/custom-widgets)!

Widgets are specified as collection fields in the Netlify CMS `config.yml` file. Note that [YAML syntax](https://en.wikipedia.org/wiki/YAML#Basic_components) allows lists and objects to be written in block or inline style, and the code samples below include a mix of both.

To see working examples of all of the built-in widgets, try making a 'Kitchen Sink' collection item on the [CMS demo site](https://cms-demo.netlify.com/). (No login required: click the login button and the CMS will open.) You can refer to the demo [configuration code](https://github.com/netlify/netlify-cms/blob/master/dev-test/config.yml) to see how each field was configured.

## [](https://www.netlifycms.org/docs/widgets/#common-widget-options)Common widget options

The following options are available on all fields:

- `required`: specify as `false` to make a field optional; defaults to `true`
- `hint`: optionally add helper text directly below a widget. Useful for including instructions.
- `pattern`: add field validation by specifying a list with a [regex pattern](https://regexr.com/) and an error message; more extensive validation can be achieved with [custom widgets](https://www.netlifycms.org/docs/custom-widgets/#advanced-field-validation)

  - **Example:**

    ```yaml

    ```

## [](https://www.netlifycms.org/docs/widgets/#default-widgets)Default widgets

BooleanCodeColorDateDateTimeFileHiddenImageListMapMarkdownNumberObjectRelationSelectStringText

### Boolean

The boolean widget translates a toggle switch input to a true/false value.

- **Name:** `boolean`
- **UI:** toggle switch
- **Data type:** boolean
- **Options:**

  - `default`: accepts `true` or `false`; defaults to `false` when `required` is set to `false`

- **Example:**

  ```yaml
  - { label: "Draft", name: "draft", widget: "boolean", default: true }
  ```

<!--EndFragment-->
