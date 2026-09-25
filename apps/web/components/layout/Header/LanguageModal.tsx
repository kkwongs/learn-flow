import { useState } from 'react'

import { Flex, Group, Modal, Radio, Stack, Text } from '@mantine/core'

import { TranslateIcon } from '@phosphor-icons/react'

import styles from './Header.module.css'

import { languages } from '@/data'

interface LanguageModalProps {
  opened: boolean
  onClose: () => void
}

export default function LanguageModal({ opened, onClose }: LanguageModalProps) {
  const [selectedCode, setSelectedCode] = useState('ko')

  const i18n = languages.map((language) => (
    <Radio.Card className={styles.root} value={language.code} key={language.code}>
      <Group gap={'xs'}>
        <Radio.Indicator />
        <Text className={styles.label}>{language.label}</Text>
      </Group>
    </Radio.Card>
  ))

  return (
    <Modal.Root
      opened={opened}
      onClose={onClose}
      centered
      size={'xs'}
      transitionProps={{
        duration: opened ? 200 : 0,
        transition: 'fade-down',
      }}
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title fw={700} fz={'h4'}>
            <Flex align={'center'} gap={'0.25rem'}>
              <TranslateIcon size={24} />
              언어 설정
            </Flex>
          </Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          <Radio.Group value={selectedCode} onChange={setSelectedCode}>
            <Stack gap={'0.5rem'}>{i18n}</Stack>
          </Radio.Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}
