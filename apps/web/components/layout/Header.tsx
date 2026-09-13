import { useState } from 'react'
import Link from 'next/link'

import {
  ActionIcon,
  Anchor,
  Avatar,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Menu,
  Modal,
  Radio,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { BooksIcon, CaretRightIcon, GlobeIcon, TranslateIcon } from '@phosphor-icons/react'

import styles from './Header.module.css'

import { user, languages } from '@/data'

interface UserButtonProps extends React.ComponentProps<'button'> {
  image?: string
  name: string
}

function UserButton({ image, name, ...others }: UserButtonProps) {
  return (
    <UnstyledButton {...others}>
      <Avatar src={image} name={name} color="initials" size={36} hiddenFrom="md" />
      <Avatar src={image} name={name} color="initials" size={42} visibleFrom="md" />
    </UnstyledButton>
  )
}

function UserMenu({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (isLoggedIn) {
    return <Button>로그인</Button>
  }
  return (
    <Menu shadow="md" width={210}>
      <Menu.Target>
        <UserButton name={user.name} />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<UserButton name={user.name} />}
          rightSection={<CaretRightIcon />}
          component={Link}
          href="profile"
        >
          <Text size="sm" fw={600}>
            {user.nickname}
          </Text>
          <Text size="xs" c={'gray.6'}>
            {user.role}
          </Text>
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          leftSection={<BooksIcon />}
          component={Link}
          href="dashboard"
          fz={'sm'}
          c={'inherit'}
        >
          대시보드
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false)
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
    <>
      <Container h={'100%'} size={'responsive'}>
        <Flex h={'100%'} align={'center'}>
          <Group align="center" justify="space-between" flex={1}>
            <Anchor component={Link} href={'/'} c={'primary'}>
              <Text fw={700} size={'xl'}>
                LearnFlow
              </Text>
            </Anchor>

            <Anchor
              component={Link}
              href="/courses"
              py="0.375rem"
              px="0.625rem"
              fw={700}
              className={styles.courses}
              bdrs="xl"
            >
              <Group gap={'0.25rem'}>
                <Image
                  src="https://cdn.inflearn.com/assets/images/header/course.png?f=avif&w=75"
                  alt="강의"
                  w={32}
                />
                <span>강의</span>
              </Group>
            </Anchor>

            <Group gap={'0.625rem'}>
              <ActionIcon color="gray.1" size={36} radius="xl" onClick={open} hiddenFrom="md">
                <GlobeIcon color="dimgray" size={16} />
              </ActionIcon>
              <ActionIcon color="gray.1" size={42} radius="xl" onClick={open} visibleFrom="md">
                <GlobeIcon color="dimgray" size={18} />
              </ActionIcon>
              <UserMenu isLoggedIn={false} />
            </Group>
          </Group>
        </Flex>
      </Container>

      <Modal.Root
        opened={opened}
        onClose={close}
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
    </>
  )
}
