import styles from './alert.module.css'
import cn from 'classnames'
import { ReactChild } from 'react'

export default function Alert({
    children,
    type
  }: {
    children: ReactChild
    type: string
  }) {
  return (
    <div
      className={cn({
        [ styles.success ]: type === 'success',
        [ styles.error ]: type === 'error'
      })}
    >
      { children }
    </div>
  )
}