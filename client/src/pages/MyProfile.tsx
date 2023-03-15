import { useGetIdentity, useOne } from '@pankod/refine-core';

import { Profile } from 'components';

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: 'users',
    id: user?.userId,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <Profile
      type="My"
      _id={myProfile?._id}
      name={myProfile?.name}
      avatar={myProfile?.avatar}
      email={myProfile?.email}
      properties={myProfile?.allProperties}
    />
  );
};

export default MyProfile;