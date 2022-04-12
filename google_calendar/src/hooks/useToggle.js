import React from 'react'

const useToggle = (initialState) => {

    const [value, setValue] = React.useState(initialState);

    const toggleHandler = () => {
        setValue(() => !value)
    }

    return [value, toggleHandler]

}
export default useToggle