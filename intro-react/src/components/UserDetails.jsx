export const UserDetails = ({user,id,email,title,book}) => {
  return (
    <div>
      <span>
        Im {user.name} {user.lastname } and my email is{" "}
        {email}. My id is: {id}  Im graduated by {title} <br />My favourite book is:  {book}
      </span>
    </div>
  );
};
