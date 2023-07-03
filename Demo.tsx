import classNames from 'classnames'
import { FC } from 'react'
type EnableColor = 'orange' | 'blue' | 'green'
const colorMap = {
  orange: {
    background: '#FFF5E8',
    color: '#E3750E',
  },
  blue: {
    color: '#38699F',
    background: '#E8F7FF',
  },
  green: {
    color: '#3F9348',
    background: '#ECFFF4',
  },
}
interface Props {
  color: EnableColor
  text: string
  className?: string
}
export const ColorLabel: FC<Props> = ({ color, text, className }) => {
  return (
    <div
      className={classNames(className, 'text-body-3 font-medium px-2')}
      css={`
        border: 1px solid rgba(27, 31, 35, 0.06);
        border-radius: 2px;
        color: ${colorMap[color].color};
        background: ${colorMap[color].background};
      `}
    >
      {text}
    </div>
  )
}
