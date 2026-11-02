import React, { CSSProperties } from 'react'
import { default as Box, configureSafeHref, BoxProps } from '../src'
import allPropertiesComponent from './all-properties-component'
import SelectorUniqueness from './fixtures/selector-uniquness-story'
import KeyframesStory from './fixtures/keyframes-story'
import SelectorsStory from './fixtures/selectors-story'

const RedBox: React.FunctionComponent<BoxProps<'div'>> = redBoxProps => (
  <Box background="red" width="100px" height="100px" margin="20px" {...redBoxProps} />
)

const logRef = (ref: Element | null) => console.log(ref)
const reactRef = React.createRef<HTMLDivElement>()

interface CustomProps {
  children: React.ReactNode
}

const CustomComp: React.FunctionComponent<CustomProps> = props => {
  return (
    <div>
      <Box is="h1">custom component</Box>
      {props.children}
    </div>
  )
}

export default { title: 'Box' }

export const ElementType = {
  name: "is=''",
  render: () => {
    return (
      <Box>
        <Box is="h1">h1</Box>
        <Box is="h2">h2</Box>
        <Box is="h3">h3</Box>
        <Box is="p">p</Box>
        <Box is="strong">strong</Box>
        <Box is="input" />
      </Box>
    )
  }
}

export const SafeHref = {
  name: "safe `href`",
  render: () => {
    configureSafeHref({
      enabled: true
    })
    return (
      <Box paddingTop={30} borderTop="1px solid" marginTop={30}>
        <Box is="h2">Links</Box>
        <Box is="a" href="/something/afile">
          Internal Link
        </Box>
        <Box is="a" href="http://localhost:9009/test">
          Same Origin Link
        </Box>
        <Box is="a" href="https://apple.com">
          External Link
        </Box>
        <Box is="a" href="javascript:alert('hi')">
          Javascript protocol Link
        </Box>
        <Box is="a" href="javascript:alert('hi')" allowUnsafeHref={true}>
          Overwride Safe Href
        </Box>
      </Box>
    )
  }
}

export const UnsafeHref = {
  name: "unsafe `href`",
  render: () => {
    configureSafeHref({
      enabled: false
    })
    return (
      <Box paddingTop={30} borderTop="1px solid" marginTop={30}>
        <Box is="h2">Links</Box>
        <Box is="a" href="/something/afile">
          Internal Link
        </Box>
        <Box is="a" href="http://localhost:9009/test">
          Same Origin Link
        </Box>
        <Box is="a" href="https://apple.com">
          External Link
        </Box>
        <Box is="a" href="javascript:alert('hi')">
          Javascript protocol Link
        </Box>
        <Box is="a" href="javascript:alert('hi')" allowUnsafeHref={false}>
          Overwride Safe Href
        </Box>
      </Box>
    )
  }
}

export const CustomComponent = {
  name: "custom comp",
  render: () => (
    <Box>
      <Box is={CustomComp}>
        <Box>chiiillld</Box>
      </Box>
    </Box>
  )
}

export const Background = {
  name: "background",
  render: () => (
    <Box>
      <Box background="red" width="100px" height="100px" />
      <Box backgroundColor="blue" width="100px" height="100px" />
      <Box
        backgroundImage="url(https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg)"
        backgroundSize="cover"
        backgroundPosition="center"
        width="100px"
        height="100px"
      />
    </Box>
  )
}

export const BorderRadius = {
  name: "borderRadius",
  render: () => (
    <Box>
      <RedBox borderRadius="5px" />
      <RedBox borderRadius="10px" borderTopRightRadius="50px" />
      <RedBox borderRadius="10px" borderTopLeftRadius="50px" />
      <RedBox borderRadius="10px" borderBottomLeftRadius="50px" />
      <RedBox borderRadius="10px" borderBottomRightRadius="50px" />
    </Box>
  )
}

export const Borders = {
  name: "borders",
  render: () => (
    <Box>
      <RedBox border="10px solid grey" />
      <RedBox border="10px solid" borderColor="blue" />
      <RedBox border="10px solid grey" borderColor="black" />
      <RedBox borderTop="10px solid grey" />
      <RedBox borderTop="10px solid grey" borderTopColor="black" />
      <RedBox borderTop="5px solid" borderTopStyle="dashed" />
      <RedBox borderBottom="10px solid grey" />
      <RedBox borderLeft="10px solid grey" />
    </Box>
  )
}

export const BoxShadow = {
  name: "boxShadow",
  render: () => (
    <Box>
      <RedBox boxShadow="0 10px 40px black" />
    </Box>
  )
}

export const Dimensions = {
  name: "dimensions",
  render: () => (
    <Box>
      <RedBox />
      <RedBox minWidth="400px" />
      <RedBox minHeight="400px" />
      <RedBox minWidth={400} />
      <RedBox minHeight={400} />
    </Box>
  )
}

export const Display = {
  name: "display",
  render: () => (
    <Box>
      <RedBox display="inline-block" />
      <RedBox display="inline">inline</RedBox>
    </Box>
  )
}

export const Flex = {
  name: "flex",
  render: () => (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <RedBox />
        <RedBox />
        <RedBox />
      </Box>
    </Box>
  )
}

export const Overflow = {
  name: "overflow",
  render: () => (
    <Box>
      <Box width="40px" height="40px" overflow="hidden">
        <RedBox />
      </Box>
    </Box>
  )
}

export const Position = {
  name: "position",
  render: () => (
    <Box>
      <RedBox position="absolute" left="10px" bottom="10px" />
    </Box>
  )
}

export const Spacing = {
  name: "spacing",
  render: () => (
    <Box>
      <Box backgroundColor="red" width="100px" height="100px" marginTop="100px" />
    </Box>
  )
}

export const Text = {
  name: "text",
  render: () => (
    <Box>
      <Box textAlign="center">Center</Box>
      <Box textAlign="right">Right</Box>
      <Box verticalAlign="middle">Middle</Box>
      <Box color="red">Right</Box>
      <Box fontFamily="sans-serif">sans-serif</Box>
      <Box fontWeight="bold">bold</Box>
      <Box fontWeight="bold">bold</Box>
      <Box fontSize="72px">72px</Box>
    </Box>
  )
}

export const List = {
  name: "list",
  render: () => (
    <Box is="ol" listStyleType="lower-greek">
      <Box is="li">I՚m</Box>
      <Box is="li">a</Box>
      <Box is="li">list</Box>
    </Box>
  )
}

export const Utils = {
  name: "utils",
  render: () => (
    <Box>
      <Box cursor="pointer">Center</Box>
      <Box boxSizing="border-box">boxSizing: border-box</Box>
    </Box>
  )
}

export const CallbackRef = {
  name: "ref",
  render: () => (
    <Box>
      <Box ref={logRef}>ref</Box>
    </Box>
  )
}

export const ObjectRef = {
  name: "ref as React ref",
  render: () => (
    <Box>
      <Box ref={reactRef}>React ref</Box>
    </Box>
  )
}

export const PropsPassThrough = {
  name: "props pass through",
  render: () => {
    interface CustomComponentProps {
      foo: string
      baz: number
      fizz: {
        buzz: boolean
      }
    }

    const CustomComponent: React.FC<CustomComponentProps> = props => <code>{JSON.stringify(props, undefined, 4)}</code>

    return (
      <Box display="flex" flexDirection="column">
        <Box is="input" type="file" />
        <Box is={CustomComponent} foo="bar" baz={123} fizz={{ buzz: true }} />
      </Box>
    )
  }
}

export const AllProperties = {
  name: "all properties",
  render: () => (
    <Box>
      {allPropertiesComponent()}
      {allPropertiesComponent()}
    </Box>
  )
}

export const Overrides = {
  name: "overrides",
  render: () => (
    <Box>
      <RedBox marginLeft="5px" />
    </Box>
  )
}

export const Selectors = {
  name: "selectors",
  render: () => <SelectorsStory />
}

export const SelectorUniquenessStory = {
  name: "selector uniqueness",
  render: () => <SelectorUniqueness />
}

export const StyleProp = {
  name: "style prop",
  render: () => {
    const style: CSSProperties = { backgroundColor: 'red', width: 200 }
    return <Box style={style}>{JSON.stringify(style, undefined, 4)}</Box>
  }
}

export const Keyframes = {
  name: "keyframes",
  render: () => <KeyframesStory />
}
