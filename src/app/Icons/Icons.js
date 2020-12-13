import styled from 'styled-components/macro'
import { ReactComponent as BackIcon } from './assets/arrow-left.svg'
import { ReactComponent as BinIcon } from './assets/bin.svg'
import { ReactComponent as CheckIcon } from './assets/check.svg'
import { ReactComponent as CrossIcon } from './assets/cross.svg'
import { ReactComponent as HomeIcon } from './assets/home.svg'
import { ReactComponent as DetailsIcon } from './assets/details.svg'
import { ReactComponent as LogoIcon } from './assets/golf-logo.svg'
import { ReactComponent as PencilIcon } from './assets/pencil.svg'
import { ReactComponent as PlusIcon } from './assets/plus.svg'

const BackIconDark = styled(BackIcon)`
    margin-right: 3px;
    stroke: var(--secondary-dark);
`
const BinIconDark = styled(BinIcon)`
    margin-right: 3px;
    stroke: var(--secondary-dark);
`
const BinIconLight = styled(BinIcon)`
    margin-right: 3px;
    stroke: var(--text-light);
`
const CheckIconDark = styled(CheckIcon)`
    margin-right: 3px;
    width: 30%;
    stroke: var(--secondary-dark);
`
const CheckIconLight = styled(CheckIcon)`
    margin-right: 3px;
    width: 30%;
    stroke: var(--text-light);
`
const CancelIconDark = styled(CrossIcon)`
    margin-right: 3px;
    stroke: var(--secondary-dark);
`
const CancelIconLight = styled(CrossIcon)`
    margin-right: 3px;
    stroke: var(--text-light);
`
const DetailsIconDark = styled(DetailsIcon)`
    margin-right: 3px;
    stroke: var(--secondary-dark);
`
const PencilIconDark = styled(PencilIcon)`
    margin-right: 3px;
    stroke: var(--secondary-dark);
`
const PencilIconLight = styled(PencilIcon)`
    margin-right: 3px;
    stroke: var(--text-light);
`

export { BackIconDark, BinIconDark, BinIconLight, CheckIconDark, CheckIconLight, CancelIconDark, CancelIconLight, DetailsIconDark, PencilIconDark, PencilIconLight, HomeIcon, PlusIcon, LogoIcon }