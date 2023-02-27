import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop.maxWidth}px;
`

export const Content = styled.main`
  margin: ${({ theme }) => theme.spacing(4)}px;
`
