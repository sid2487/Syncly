import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getUserFriends } from '../lib/api'
import NoFriendsFound from './NoFriendsFound'
import FriendCard from './FriendCard'

const FriendsPage = () => {
  const { data: friends = [], isLoading } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  })
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
          All Your Friends
        </h2>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : friends.length === 0 ? (
          <NoFriendsFound />
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FriendsPage