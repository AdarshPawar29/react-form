```sps
{
  "component": "PageTitle",
  "props": {
      "heading": "Serial Shipping Container Codes (SSCC-18)"
  }
}
```

!!!card

#### Overview

Some labels may require a special field named “SerialShippingContainerCode”, or an SSCC-18. SSCC-18s identify specific logistic units, such as parcels or pallets, so that companies are able to track and share information about that unit during transit. These codes are always 18 digits long, and divided into 5 sections. To learn more, visit the [GS1 website](/#).
![](https://github.com/AdarshPawar29/react-form/blob/master/SSCC%20image.png)

```sps
{
  "component": "MarkdownImage",
  "props": {
    "src": "SSCC.png",
    "alt": "serial-shipping-container-codes"
  }
}
```

### Application Identifier

The Application Identifier is used to indicate the data field’s type. In this case, “(00)” indicates that the data field contains an SSCC-18.

### Extension Digit

The Extension Digit is used to increase the capacity of the serial reference within the SSCC-18. It is assigned by the company that constructs the SSCC-18, and ranges from 0-9.

### GS1 Company Prefix

The GS1 Company Prefix is assigned to the manufacturer or brand owner of this specific logistic unit. GS1 Company Prefixes are 7-10 digits long. To register your company or to learn more about GS1 Company Prefixes, visit GS1’s Company Prefix page.

### Serial Number

The Serial Number is assigned by the GS1 Company Prefix’s owner in order to uniquely identify a logistic unit. Serial Numbers are 6-9 digits long, depending on the length of the [GS1 Company Prefix](/#).

### Check Digit

The Check Digit is used to verify that the SSCC-18 number is built correctly. It is calculated using the Modulo 10 algorithm. To generate or verify a Check Digit, visit [GS1’s Check Digit calculation page](/#).
