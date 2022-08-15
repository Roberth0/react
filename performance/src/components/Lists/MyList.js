import { isEqual } from 'lodash'
import { memo } from 'react'

const Li = memo(({ children }) => {
  console.log(`renderizando ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, isEqual)


const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li
          key={x.name + x.lastname}
        >
          {x.name} {x.lastname}
        </Li>
      )}
    </ul>
  )
}

export default memo(MyList)
