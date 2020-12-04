Normal Form

```jsx
<SaveGameForm onSubmit={() => {}} showGameCardsPage={() => {}} />
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
  showGameCardsPage={() => {}}
/>
```
