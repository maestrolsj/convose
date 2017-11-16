import { i18nConst } from './../const'

const currentLang = 'en'

export default i18n = value => (
  i18nConst[value][currentLang]
)
