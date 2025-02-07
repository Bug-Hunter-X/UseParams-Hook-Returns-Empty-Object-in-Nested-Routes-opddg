The solution is to ensure that all parent routes have corresponding `Route` elements to match the path segments leading to the nested component where `useParams` is used. This will ensure that the path matching process correctly reaches the nested component and provides the necessary parameters to `useParams`.  

For example, given the URL '/users/123/profile', ensure that routes exist for '/users' and '/users/:userId' before the nested '/profile' component.  Each route must handle the respective path segment to ensure successful path matching.