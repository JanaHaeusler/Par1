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
  stroke: var(--secondary-dark);
`
const BinIconDark = styled(BinIcon)`
  stroke: var(--secondary-dark);
`
const BinIconLight = styled(BinIcon)`
  stroke: var(--text-light);
`
const CheckIconDark = styled(CheckIcon)`
  width: 30%;
  stroke: var(--secondary-dark);
`
const CheckIconLight = styled(CheckIcon)`
  width: 30%;
  stroke: var(--text-light);
`
const CancelIconDark = styled(CrossIcon)`
  stroke: var(--secondary-dark);
`
const CancelIconLight = styled(CrossIcon)`
  stroke: var(--text-light);
`
const DetailsIconDark = styled(DetailsIcon)`
  stroke: var(--secondary-dark);
`
const PencilIconDark = styled(PencilIcon)`
  stroke: var(--secondary-dark);
`
const PencilIconLight = styled(PencilIcon)`
  stroke: var(--text-light);
`

export {
  BackIconDark,
  BinIconDark,
  BinIconLight,
  CheckIconDark,
  CheckIconLight,
  CancelIconDark,
  CancelIconLight,
  DetailsIconDark,
  PencilIconDark,
  PencilIconLight,
  HomeIcon,
  PlusIcon,
  LogoIcon,
}
