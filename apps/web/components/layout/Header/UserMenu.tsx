import Link from 'next/link'

import { Box, Button, Menu, Modal, PasswordInput, Text, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { BooksIcon, CaretRightIcon } from '@phosphor-icons/react'

import UserButton from './UserButton'

import { user } from '@/data'

function LoginModal() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={opened} onClose={close} closeOnClickOutside={false} centered>
        <Text fw={700} size={'xl'} c={'green.6'} ta={'center'}>
          LearnFlow
        </Text>

        <Box mt={'lg'}>
          <TextInput data-autofocus placeholder="아이디" />
          <PasswordInput placeholder="비밀번호" mt="xs" />
        </Box>

        <Button fullWidth mt={'md'}>
          로그인
        </Button>
      </Modal>

      <Button bdrs={'xl'} color="gray.1" c={'gray.7'} onClick={open}>
        로그인
      </Button>
    </>
  )
}

export default function UserMenu({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (!isLoggedIn) {
    return <LoginModal />
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
