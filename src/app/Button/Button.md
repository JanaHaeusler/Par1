Enabled Main Button

```jsx
import { CheckIconLight } from '../assets/Icons/Icons'
;<Button
  main
  onClick={() => {}}
  iconComponent={<CheckIconLight />}
  text="Save"
/>
```

Disabled Main Button

```jsx
import { CheckIconLight } from '../assets/Icons/Icons'
;<Button
  main
  onClick={() => {}}
  disabled
  iconComponent={<CheckIconLight />}
  text="Save"
/>
```

Enabled Button

```jsx
import { CancelIconDark } from '../assets/Icons/Icons'
;<Button onClick={() => {}} iconComponent={<CancelIconDark />} text="Cancel" />
```
