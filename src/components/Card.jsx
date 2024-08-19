import { useAuthContext }  from "../context/AuthContext"


const Card = ({ id, imageUrl, title, type }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch("http://localhost:5000/restaurants/" + id, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Restaurant has deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-3 h-96 " id="card">
      <figure>
        <img src={imageUrl} alt={title} className="rounded-xl h- w-96 h-64" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{type}</p>

        {user &&
          (user.roles.includes("ROLES_MODERATOR") ||
            user.roles.includes("ROLES_ADMIN")) && (
            <div className="card-actions justify-end">
              {user.roles.includes("ROLES_ADMIN") && (
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              )}
              <a href={`/edit${id}`} className="btn btn-warning">
                Edit
              </a>
            </div>
          )}
      </div>
    </div>
  );
};
export default Card;
