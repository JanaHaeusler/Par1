import styled from 'styled-components/macro'
import { ReactComponent as BackIcon } from './assets/arrow-left.svg'
import { ReactComponent as BinIcon } from './assets/bin.svg'
import { ReactComponent as CheckIcon } from './assets/check.svg'
import { ReactComponent as CrossIcon } from './assets/cross.svg'
import { ReactComponent as DetailsIcon } from './assets/details.svg'
import { ReactComponent as LogoIcon } from './assets/golf-logo.svg'
import { ReactComponent as HomeIcon } from './assets/home.svg'
import { ReactComponent as PencilIcon } from './assets/pencil.svg'
import { ReactComponent as PlusIcon } from './assets/plus.svg'

const BackIconPrimary = styled(BackIcon)`
  stroke: var(--primary);
`
const BinIconPrimary = styled(BinIcon)`
  stroke: var(--primary);
`
const BinIconPrimaryText = styled(BinIcon)`
  margin-right: 3px;
  stroke: var(--primary);
`
const CancelIconLightText = styled(CrossIcon)`
  margin-right: 3px;
  stroke: var(--white);
`
const CancelIconPrimaryText = styled(CrossIcon)`
  margin-right: 3px;
  stroke: var(--primary);
`
const CheckIconLightText = styled(CheckIcon)`
  margin-right: 3px;
  width: 25%;
  stroke: var(--white);
`
const DetailsIconPrimary = styled(DetailsIcon)`
  stroke: var(--primary);
`
const PencilIconPrimary = styled(PencilIcon)`
  stroke: var(--primary);
`

export {
  BackIconPrimary,
  BinIconPrimary,
  BinIconPrimaryText,
  CancelIconLightText,
  CancelIconPrimaryText,
  CheckIconLightText,
  DetailsIconPrimary,
  PencilIconPrimary,
  HomeIcon,
  PlusIcon,
  LogoIcon,
}
