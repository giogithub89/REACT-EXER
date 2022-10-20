
import React from 'react'
import { LanguageContext } from './LanguageContext'

const Strings = {
    en: {
        Calculate: 'Calculate the flour strength',
        flour_strenth: 'Flour strength is'

    },
    it:{
        Calculate: 'Calcola la forza della farina',
        flour_strenth: 'La forza della farina è'

    }
}

function DisplayLanguage() {
  return (
    <div>
        <LanguageContext.Consumer>
            {language=>{
                return(
                    <div>
                        {Strings[language].Calculate}
                        {Strings[language].flour_strenth}

                    </div>
                )
            }}

        </LanguageContext.Consumer>
    </div>
  )
}

export default DisplayLanguage