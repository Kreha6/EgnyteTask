export const findById = (id, list) =>  list.find(item=>item.id ===id)

export const toggleFile =(file) => ({...file, checked: !file.checked})

export const updateFile =(list, updated) => {
  const updatedIndex = list.findIndex(index=> index.id === updated.id)
  return[
    ...list.slice(0, updatedIndex),updated, ...list.slice(updatedIndex+1)
  ]
}

export const removeFile =(list, id)=>{
  const removeIndex = list.findIndex(item=>item.id === id)
  return[
    ...list.slice(0,removeIndex),...list.slice(removeIndex+1)
  ]
}
