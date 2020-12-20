import styled from 'styled-components/macro'

import { ReactComponent as BinIcon } from './bin.svg'
import { ReactComponent as CheckIcon } from './check.svg'
import { ReactComponent as CrossIcon } from './cross.svg'
import { ReactComponent as HomeIcon } from './home.svg'
import { ReactComponent as LogoIcon } from './golf-logo.svg'
import { ReactComponent as PencilIcon } from './pencil.svg'
import { ReactComponent as PlusIcon } from './plus.svg'

const BinIconDark = styled(BinIcon)`
    margin-right: 3px;
    fill: var(--secondary-dark);
`
const CheckIconDark = styled(CheckIcon)`
    margin-right: 3px;
    width: 24%;
    fill: var(--secondary-dark);
`
const CheckIconLight = styled(CheckIcon)`
    margin-right: 3px;
    width: 24%;
    fill: var(--text-light);
`
const CancelIconDark = styled(CrossIcon)`
    margin-right: 3px;
    fill: var(--secondary-dark);
`
const CancelIconLight = styled(CrossIcon)`
    margin-right: 3px;
    fill: var(--text-light);
`
const PencilIconDark = styled(PencilIcon)`
    margin-right: 3px;
    fill: var(--secondary-dark);
`

export { BinIconDark, CheckIconDark, CheckIconLight, CancelIconDark, CancelIconLight, PencilIconDark, HomeIcon, PlusIcon, LogoIcon }