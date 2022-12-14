# Vårt projekt:
Vårt projekt är en tjänstförmedlingssida. Man ska som tjänstutövare kunna skapa en profil för att lägga upp sina tjänster.
Som köpare kan man söka på tjänster och kontakta tjänsteutövarna genom att skicka kontaktförfrågningar.

| # Our   |      # Weekly      |  # Plans |
|----------|-------------|------|
| Dag |  Tid | Plats |
| Måndag |    10.00   |   Stan |
| Tisdag |    09.00   |   Skolan |
| Onsdag |    10.00   |   Online/discord |
| Torsdag |   09.00   |   Skolan |
| Fredag |    13.00   |   Online |


## Onboarding
Det här vår [Trello sprintboard](https://trello.com/b/bv0EIPpR/tj%C3%A4nstf%C3%B6rmedlingssida)
### Hosting
the page is hosted at heroku follow this link https://tjanster22.herokuapp.com/

**FrontEnd language:**
+ React

**Test technologies:**
+ Jestjs with React testing library

**Other technologies:**
+ husky -pre commit
+ git actions
    
 <h3>Class Diagram over project developers<h3>


```mermaid
classDiagram
    Tjänstförmedlingssida <|-- Robert
    Tjänstförmedlingssida <|-- Ayda
    Tjänstförmedlingssida <|-- Romina
    Tjänstförmedlingssida <|-- James
    Tjänstförmedlingssida <|-- Abdi
    Tjänstförmedlingssida : Front-End
    Tjänstförmedlingssida : +React
    Tjänstförmedlingssida: Back-end()
    Tjänstförmedlingssida: +NodeJS()
    class Robert{
      + Databasexpert
      + Gillar infinity loops
      + Stilig
    }
    class Ayda{
      +Markdown expert
      +Bra på ställa frågor
    }
    class Romina{
      +Scrumboard designer
      +Bra på laga persisk mat
    }
    class James{
      +JWT enthusiast
      -Gillar Covid och Covid gillar honom
    }
    class Abdi{
      +Gillar äta proteinbars
      -Batteriet på hans dator tar slut fort
    }
```


## TTFHW

To access the repository, make sure you are a collaborator, so that you can clone the repo in your workspace folder with these commands:

```javascript
cd ~
cd ws
git clone: https://github.com/Tootfarangi90/Tjanstformedlingssida-BE.git
touch .env
CURL -L https://gist.githubusercontent.com/rob9099/f879f8e5162d48484195ba481ae765d1/raw/c79604313b432587dc5b52c26527b843a4a118d7/.env -o .env
npm i
npm pkg set scripts.test="react-scripts test --verbose --watchAll=false"
echo "node_modules" > .gitignore
echo "logs" >> .gitignore
echo "*.log" >> .gitignore
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore
echo ".env.test" >> .gitignore
code .
```



### Testing

```javascript
npm test
```

```console
npm install @testing-library/react @testing-library/jest-dom --save-dev

mkdir __tests__

touch ./__tests__/yourFile.test.js

```
