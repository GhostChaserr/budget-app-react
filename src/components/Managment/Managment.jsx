const Managment = () => {
  const users = [
    {
      id: 1,
      name: "george",
      role: "user",
    },
    {
      id: 2,
      name: "alex",
      role: "admin",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <div>
          <div>Hello: {user.name}</div>
          <div>
            {user.role === "user" && (
              <button
                onClick={() => {
                  const updated = users.map((currentUser) => {
                    if (currentUser.id === user.id) {
                      return {
                        ...user,
                        role: "admin",
                      };
                    }
                    return user;
                  });

                  // 1. შეინახო უკან საცავში
                  localStorage.setItem("users", JSON.stringify(updated));
                }}
              >
                Make Admin
              </button>
            )}
            {user.role === "admin" && (
              <button
                onClick={() => {
                  const updated = users.map((currentUser) => {
                    if (currentUser.id === user.id) {
                      return {
                        ...user,
                        role: "user",
                      };
                    }
                    return user;
                  });

                  // 1. შეინახო უკან საცავში
                }}
              >
                Make User
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Managment;
