Normal Form

```jsx
<CreateForm
  formInputs={{
    location: '',
    date: '',
    players: '',
    winner: '',
    shots: '',
  }}
  isSaveButtonShown={false}
  updateDirtyInputs={() => {}}
  handleChange={() => {}}
  showErrorMessage={() => {}}
  handleSubmit={() => {}}
/>
```

Form in Edit Modus

```jsx
<CreateForm
  formInputs={{
    location: '',
    date: '',
    players: '',
    winner: '',
    shots: '',
  }}
  isSaveButtonShown={false}
  isEditFormShown={true}
  updateDirtyInputs={() => {}}
  handleChange={() => {}}
  showErrorMessage={() => {}}
  handleSubmit={() => {}}
  handleCancelEditModus={() => {}}
/>
```
