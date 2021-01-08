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
  stroke: var(--primary);
`
const BinIconDark = styled(BinIcon)`
  stroke: var(--primary);
`
const CheckIconLight = styled(CheckIcon)`
  width: 30%;
  stroke: var(--light);
`
const CancelIconDark = styled(CrossIcon)`
  stroke: var(--primary);
`
const CancelIconLight = styled(CrossIcon)`
  stroke: var(--light);
`
const DetailsIconDark = styled(DetailsIcon)`
  stroke: var(--primary);
`
const PencilIconDark = styled(PencilIcon)`
  stroke: var(--primary);
`

export {
  BackIconDark,
  BinIconDark,
  CheckIconLight,
  CancelIconDark,
  CancelIconLight,
  DetailsIconDark,
  PencilIconDark,
  HomeIcon,
  PlusIcon,
  LogoIcon,
}
