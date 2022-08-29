// Library Imports
import styled from 'styled-components'
import media from 'globalConfig/mobile'

const StyledHeader = styled.section`
/* MOBILE FIRST DEFAULT STYLES */
  border: 1px solid #000;
  width: 100%;


/* Min width of 375 */
  ${media.iphoneSe `
    
  `}

/* Min width of 414 */
  ${media.iphoneXr `
    
  `}

/* Min width of 576 */
  ${media.landscapePhones `
    
  `}

/* Min width of 768 */
  ${media.tablet `
    
  `}

/* Min width of 1024 */
  ${media.desktop `
    
  `}

/* Min width of 1200 */
  ${media.widescreen `
    
  `}

/* Min width of 1980 */
  ${media.udh `
    
  `}
`

export default StyledHeader
