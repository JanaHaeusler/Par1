Normal Form

```jsx
<SaveGameForm
  formInputs={{
    location: '',
    date: '',
    players: '',
    winner: '',
    shots: '',
  }}
  showSaveButton={false}
  updateDirtyInputs={() => {}}
  handleChange={() => {}}
  showErrorMessage={() => {}}
  handleSubmit={() => {}}
/>
```

Form in Edit Modus

```jsx
<SaveGameForm
  formInputs={{
    location: '',
    date: '',
    players: '',
    winner: '',
    shots: '',
  }}
  showSaveButton={false}
  isEditFormShown={true}
  updateDirtyInputs={() => {}}
  handleChange={() => {}}
  showErrorMessage={() => {}}
  handleSubmit={() => {}}
  handleCancelEditModus={() => {}}
/>
```
