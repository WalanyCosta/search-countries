import { CaretDown } from '@phosphor-icons/react';
import styles from './select.module.scss';
import * as Select from '@radix-ui/react-select';

type Props = {
    onValueChange: (value: string) => void
}

function SelectComponents(props: Props) {
  return (
    <Select.Root {...props}>
    <Select.Trigger className={styles.SelectTrigger} aria-label="Food">
      <Select.Value placeholder="Filter by Region" />
      <Select.Icon className={styles.SelectIcon}>
        <CaretDown className={styles.icon} />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className={styles.SelectContent}>
        <Select.Viewport className={styles.SelectViewport}>
            <Select.Item className={styles.SelectItem} value="africa">
                <Select.ItemText>Africa</Select.ItemText>
                <Select.ItemIndicator className={styles.SelectItemIndicator} />
            </Select.Item>
            <Select.Item className={styles.SelectItem} value="asia">
                <Select.ItemText>Asia</Select.ItemText>
                <Select.ItemIndicator className={styles.SelectItemIndicator} />
            </Select.Item>
            <Select.Item className={styles.SelectItem} value="america">
                <Select.ItemText>America</Select.ItemText>
                <Select.ItemIndicator className={styles.SelectItemIndicator} />
            </Select.Item>
            <Select.Item className={styles.SelectItem} value="europe">
                <Select.ItemText>Europe</Select.ItemText>
                <Select.ItemIndicator className={styles.SelectItemIndicator} />
            </Select.Item>
            <Select.Item className={styles.SelectItem} value="oceania">
                <Select.ItemText>Oceania</Select.ItemText>
                <Select.ItemIndicator className={styles.SelectItemIndicator} />
            </Select.Item>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
  )
}


export default SelectComponents