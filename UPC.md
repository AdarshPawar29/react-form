```sps
{
  "component": "PageTitle",
  "props": {
      "heading": "Universal Product Codes (UPC)"
  }
}
```

!!!card

#### Overview

Some labels may require a special field named “ConsumerPackageCode”, otherwise known as a Universal Product Code, or UPC. UPCs identify features for a specific product, such as its size or color. These codes are always 12 digits long, and divided into 3 sections. To learn more, visit the [GS1 website](/#).

```sps
{
  "component": "MarkdownImage",
  "props": {
    "src": "UPC.png",
    "alt": "universal-product-codes"
  }
}
```

### GS1 Company Prefix

The GS1 Company Prefix is assigned to the manufacturer or brand owner of this specific logistic unit. GS1 Company Prefixes are 7-10 digits long. To register your company or to learn more about GS1 Company Prefixes, [GS1’s Company Prefix page](/#).

### Item Number

The Item Number is used to identify a specific product. Product variations have different Item Numbers, for example a specific style of shirt in two different sizes would have two Item Numbers. Item Numbers are 1-5 digits long.

### Check Digit

The Check Digit is used to verify that the UPC number is built correctly. It is calculated using the Modulo 10 algorithm. To generate or verify a Check Digit, please visit [GS1’s Check Digit calculation page](/#).
