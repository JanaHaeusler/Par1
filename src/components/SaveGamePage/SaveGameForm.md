Normal Form

```jsx
<SaveGameForm
  onSubmit={() => {}}
  isEditFormShown={false}
  targetProfile={{
    location: 'City Park',
    date: '2020-01-01',
    players: 'Fritz, Hanni, Nanni',
    winner: 'Fritz',
    shots: '35',
    _id: '2',
  }}
  editGameProfile={() => {}}
  cancelEditModus={() => {}}
/>
```

Form in Edit Modus

```jsx
<SaveGameForm
  onSubmit={() => {}}
  isEditFormShown={true}
  targetProfile={{
    location: 'Horner Racecourse',
    date: '2020-12-24',
    players: 'John, Jane',
    winner: 'Jane',
    shots: '89',
    _id: '1',
  }}
  editGameProfile={() => {}}
  cancelEditModus={() => {}}
/>
```
