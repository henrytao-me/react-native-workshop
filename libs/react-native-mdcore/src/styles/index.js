const cache = {}
const resolve = (theme) => {

  const text = {
    button: {
      color: theme.textColor.primary.background,
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSize.button,
      lineHeight: theme.lineHeight.button
    },
    caption: {
      color: theme.textColor.primary.background,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.caption,
      lineHeight: theme.lineHeight.caption
    },
    body1: {
      color: theme.textColor.primary.background,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.body1,
      lineHeight: theme.lineHeight.body1
    },
    body2: {
      color: theme.textColor.primary.background,
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSize.body2,
      lineHeight: theme.lineHeight.body2
    },
    subhead1: {
      color: theme.textColor.primary.background,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.subhead1,
      lineHeight: theme.lineHeight.subhead1
    },
    subhead2: {
      color: theme.textColor.primary.background,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.subhead2,
      lineHeight: theme.lineHeight.subhead2
    },
    title: {
      color: theme.textColor.primary.background,
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSize.title,
      lineHeight: theme.lineHeight.title
    },
    headline: {
      color: theme.textColor.primary.background,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.headline,
      lineHeight: theme.lineHeight.headline
    },
    display1: {
      color: theme.textColor.primary.background,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.display1,
      lineHeight: theme.lineHeight.display1
    },
    display2: {
      color: theme.textColor.primary.background,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.display2,
      lineHeight: theme.lineHeight.display2
    },
    display3: {
      color: theme.textColor.primary.background,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.display3,
      lineHeight: theme.lineHeight.display3
    },
    display4: {
      color: theme.textColor.primary.background,
      fontFamily: theme.fontFamily.light,
      fontSize: theme.fontSize.display4,
      lineHeight: theme.lineHeight.display4
    }
  }

  return Object.assign(cache, {
    text
  })
}

export default { resolve }
