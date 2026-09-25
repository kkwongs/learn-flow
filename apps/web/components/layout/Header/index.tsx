import Link from 'next/link'

import { ActionIcon, Anchor, Container, Flex, Group, Image, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { GlobeIcon } from '@phosphor-icons/react'

import styles from './Header.module.css'
import LanguageModal from './LanguageModal'
import UserMenu from './UserMenu'

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false)

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

      <LanguageModal opened={opened} onClose={close} />
    </>
  )
}
