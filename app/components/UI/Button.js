import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button as BaseButton, Flex, Text } from 'rebass'
import Spinner from './Spinner'

const Wrapper = styled(BaseButton)`
  transition: all 0.25s;
  outline: none;
  font-weight: 300;
  line-height: '18px';
  white-space: nowrap;
  &:disabled {
    opacity: 0.5;
  }
  &:hover:enabled {
    cursor: pointer;
  }
`
Wrapper.displayName = 'Button'

/**
 * @render react
 * @name Button
 * @example
 * <Button><Basic button</Button>
 */
class Button extends React.PureComponent {
  static displayName = 'Button'
  static defaultProps = {
    processing: false,
    active: false,
    size: 'medium',
    variant: 'normal'
  }
  static propTypes = {
    processing: PropTypes.bool,
    active: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium']),
    variant: PropTypes.string
  }

  render() {
    let { children, active, processing, size, variant, ...rest } = this.props
    const sizes = {
      small: {
        x: 3,
        y: 2
      },
      medium: {
        x: 5,
        y: 3
      }
    }

    size = sizes[size] || sizes['medium']
    if (variant === 'secondary') {
      size.x = 0
    }

    const borderRadius = variant === 'secondary' ? 0 : 5

    return (
      <Wrapper
        px={size['x']}
        py={size['y']}
        borderRadius={borderRadius}
        variant={variant}
        className={active ? 'active' : null}
        {...rest}
      >
        {processing ? (
          <Flex alignItems="center">
            {processing && <Spinner />}
            <Text fontWeight="normal" fontFamily="sans" ml={2}>
              {children}
            </Text>
          </Flex>
        ) : (
          <Text fontWeight="normal" fontFamily="sans">
            {children}
          </Text>
        )}
      </Wrapper>
    )
  }
}

export default Button
