import { Avatar, UnstyledButton } from '@mantine/core'

interface UserButtonProps extends React.ComponentProps<'button'> {
  image?: string
  name: string
}

export default function UserButton({ image, name, ...others }: UserButtonProps) {
  return (
    <UnstyledButton {...others}>
      <Avatar src={image} name={name} color="initials" size={36} hiddenFrom="md" />
      <Avatar src={image} name={name} color="initials" size={42} visibleFrom="md" />
    </UnstyledButton>
  )
}
