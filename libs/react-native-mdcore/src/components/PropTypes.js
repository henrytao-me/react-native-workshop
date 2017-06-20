import PropTypes from 'prop-types'

export default Object.assign({}, PropTypes, {
  color: PropTypes.string,
  iconState: PropTypes.oneOf(['active', 'focused', 'inactive']),
  opacity: PropTypes.number,
  palette: PropTypes.oneOf(['primary', 'primaryDark', 'primaryLight', 'accent', 'accentDark', 'accentLight', 'warn', 'warnDark', 'warnLight', 'background', 'backgroundDark', 'backgroundLight']),
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]),

  ellipsizeMode: PropTypes.oneOf(['head', 'middle', 'tail', 'clip']),
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  iconSet: PropTypes.string,
  imageRadius: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['auto'])
  ]),
  imageResizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'center']),
  imageScaleType: PropTypes.oneOf(['width', 'height', 'none']),
  imageSource: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string
    }),
    PropTypes.number
  ]),
  text: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  textSubType: PropTypes.oneOf(['primary', 'secondary', 'hint']),
  textType: PropTypes.oneOf(['button', 'caption', 'body1', 'body2', 'subhead1', 'subhead2', 'title', 'headline', 'display1', 'display2', 'display3', 'display4']),
  view: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ])
})
