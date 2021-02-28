# fpwd-front-end

Demo: https://fpwd-task.dkostrzewa.pl/

Tech stack:

-   React
-   TypeScript
-   Styled Components
-   React Testing Library

Description of the approach:

As part of the task, I created an application that downloads and displays movie covers using the OMDb API. For communication with the API I used fetch because it is built into the Web API and it is not necessary to use external libraries for such a small application.

The application has been divided into:

-   api - contains methods that bind to the API
-   components - contains React and styled components
-   interfaces - contains types and interfaces
-   tests\*\* - Contains tests

Such a division makes the code more readable, it is easy to find the files you are looking for.
I did not use any state management mechanism because the application is so simple that it is enough to apply the state in the component.
For more complex applications, I would use Redux or MobX.

Tests using React Testing Library have also been implemented

If I had more time, I would implement downloading movie details after clicking on the cover, as well as infinite scroll
