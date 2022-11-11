import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from "./ColorButtons.module.scss"

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" className={styles.test}>
        Оформить заказ
      </Button>
    </Stack>
  );
}

