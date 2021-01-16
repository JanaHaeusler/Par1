Enabled Main Button

```jsx
import { CheckIconLightText } from '../Icons/Icons'
;<Button
  isMain
  onClick={() => {}}
  iconComponent=<CheckIconLightText />
  text="Save"
/>
```

Disabled Main Button

```jsx
import { CheckIconLightText } from '../Icons/Icons'
;<Button
  isMain
  disabled
  onClick={() => {}}
  iconComponent=<CheckIconLightText />
  text="Save"
/>
```

Enabled Button

```jsx
import { CancelIconPrimaryText } from '../Icons/Icons'
;<Button
  onClick={() => {}}
  iconComponent=<CancelIconPrimaryText />
  text="Cancel"
/>
```
