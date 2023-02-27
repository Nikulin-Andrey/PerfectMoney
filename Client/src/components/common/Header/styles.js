import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing(4)}px;
  font-size: ${({ theme }) => theme.fonts.big}px;
`
