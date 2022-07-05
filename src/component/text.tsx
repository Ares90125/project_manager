import * as React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import { colors } from '../design'

export function H3(props: TextProps) {
  return <Text style={[props.style, styles.H3]}>{props.children}</Text>
}
export function H3Bold(props: TextProps) {
  return <Text style={[props.style, styles.H3Bold]}>{props.children}</Text>
}

export function H3BoldGray(props: TextProps) {
  return <Text style={[props.style, styles.H3BoldGray]}>{props.children}</Text>
}

export function Body(props: TextProps) {
  return <Text style={[props.style, styles.Body]}>{props.children}</Text>
}
export function BodyLight(props: TextProps) {
  return <Text style={[props.style, styles.BodyLight]}>{props.children}</Text>
}

export function BodyLight2(props: TextProps) {
  return <Text style={[props.style, styles.BodyLight2]}>{props.children}</Text>
}

export function BodyLightWhite(props: TextProps) {
  return <Text style={[props.style, styles.BodyLightWhite]}>{props.children}</Text>
}

export function BodyS(props: TextProps) {
  return <Text style={[props.style, styles.BodyS]}>{props.children}</Text>
}

export function BodySLight(props: TextProps) {
  return <Text style={[props.style, styles.BodySLight]}>{props.children}</Text>
}

export function H4Bold(props: TextProps) {
  return <Text style={[props.style, styles.H4Bold]}>{props.children}</Text>
}

export function H5Light(props: TextProps) {
  return <Text style={[props.style, styles.H5Light]}>{props.children}</Text>
}

export function H2Bold(props: TextProps) {
  return <Text style={[props.style, styles.H2Bold]}>{props.children}</Text>
}

export function H2BoldWhite(props: TextProps) {
  return <Text style={[props.style, styles.H2BoldWhite]}>{props.children}</Text>
}

const styles = StyleSheet.create({
  H1: {
    fontSize: 22,
    color: colors.blauFosc,
  },
  // header-title-2 header-title-4
  H2: {
    fontSize: 18,
    color: colors.blauFosc,
  },
  H2Bold: {
    fontSize: 18,
    color: colors.blauFosc,
    fontWeight: 'bold',
  },
  H2BoldWhite: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
  // header-title-5
  H3: {
    fontSize: 16,
    color: colors.blauFosc,
  },
  H3Bold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blauFosc,
    marginBottom: 5
  },

  H3BoldGray: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grisDelta,
  },

  H4Bold: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },

  H5Light: {
    fontSize: 8,
    fontWeight: 'normal',
  },
  // text-1
  Body: {
    fontSize: 14,
    color: colors.blauFosc,
  },
  BodyLight: {
    fontSize: 14,
    color: colors.grisDelta,
  },
  BodyLight2: {
    fontSize: 10,
    color: colors.grisDelta,
  },
  BodyLightWhite: {
    fontSize: 14,
    color: colors.white,
  },
  BodyS: {
    fontSize: 12,
    color: colors.blauFosc,
  },
  BodySLight: {
    fontSize: 12,
    color: colors.grisDelta,
  },
})
