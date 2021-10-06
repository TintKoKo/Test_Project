
Atomic Design

Rules of Atoms(Element):

1.  Should not compose other components/only uses native elements or framework-specific components similar to native elements
2.  Can have its own markup & styles
3.  Can maintain its own internal state
4.  Should not be tightly coupled to specific UI or Logic areas
    Should not access application (or higher level) state directly
5.  Should not have any non-ui/layout related side effects
    Should not implement any application-specific business logic

Rules of Molecules(Compounds):

1. A component made up of one or more Atoms
2. Can have its own markup & styles
3. Can maintain its own internal state
4. Should not be tightly coupled to specific UI or Logic areas
5. Should not access application (or higher level) state directly
6. Should not have any non-ui/layout related side effects
7. Should not implement any application-specific business logic

Rules of Organisms(Modules):

1. A complex component made up of multiple atoms and/or molecules and/or other organisms
2. Can have its own markup & styles
3. Can fetch application-specific data
4. Can implement application-specific business logic
5. Can be connected to application (or higher level) state
6. Can be tightly coupled with a specific area (UI and/or Logic) of the app
7. Can be organized into sub-folders by logical categorization (feature, page, etc...)

Rules of Templates(Layout):

1. A component that facilitates the layout of multiple organisms
2. Can have its own markup & styles.
3. Can accept & pass props as required.
4. Should not access application (or higher level) state
5. Should not have any non-ui/layout related side effects
6. Should not implement any application-specific business logic

Rules of Pages(Screens):

1. A component that implements a particular template
2. Can fetch application-specific data
3. Can implement application-specific business logic
4. Can be connected to application (or higher level) state
5. Should not have its own markup & styles
