export const PUSH_WORD = '@@dictionary/PUSH_WORD'
export const pushWord = (key, eusk, trans) => {
  console.scope('actions:dictionary', PUSH_WORD, key)
  return {
    type: PUSH_WORD,
    key, 
    eusk, 
    trans,
  }
}