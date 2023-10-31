import { ApButton, ApTextInput } from '@/src/components'
import { Formik, Form } from 'formik'
import React, { useState } from 'react'
import { InfoCircleFilled } from '@ant-design/icons'
import { useBiddingContext } from './context'
import { DELETE_BID, UPDATE_BID } from './gql/query'
import { useMutation, useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import { FIND_ONE_PROFILE } from '../profile/gql/query'
import { Image } from 'antd'

export const EditBid = ({ userBid, projectID, refetch }) => {
  const [showForm, setShowForm] = useState(false)
  const { deleteBid, updateBid, loading } = useBiddingContext()
  const session: any = useSession()
  const userProfile = useQuery(FIND_ONE_PROFILE)

  const handleSubmit = (val) => {
    setShowForm(false)
    updateBid(
      userBid?._id,
      {
        ...val,
      },
      refetch,
      { userID: session?.data?.user?._id, projectID },
    )
  }

  const handleDelete = () => {
    deleteBid(userBid._id, refetch, { userID: session?.data?.user?._id, projectID })
  }

  return (
    <div className="w-full bg-skin-base shadow-md rounded-md">
      <h1 className="text-xl font-bold px-5 py-3 border-b">Edit Bid Placed on this Project</h1>
      {!showForm ? (
        <div className="p-5">
          <div className="flex justify-between mb-5">
            <div className="flex gap-5 items-start">
              <Image
                alt=""
                src={userProfile.data?.findOneProfile.avatar}
                width="100px"
                height="100px"
                className="rounded-md"
              />

              <div className="">
                <p className="font-bold text-xl">
                  {userBid?.user?.firstName + ' ' + ' ' + userBid?.user?.lastName}
                </p>
                <p className="text-gray-400">{userBid?.user?.email}</p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <h1 className="font-bold text-xl">${userBid?.budget} USD</h1>
              <p className="">to be delivered in {userBid?.deliveredIn} days.</p>
            </div>
          </div>

          <h1>{userBid?.proposal}</h1>

          <div className="flex justify-end items-center gap-4 mt-5">
            <ApButton onClick={() => handleDelete()}>Retract</ApButton>

            <ApButton outline onClick={() => setShowForm(true)}>
              Edit Bid
            </ApButton>
          </div>
        </div>
      ) : (
        <div className="p-5">
          <Formik
            initialValues={{
              budget: userBid.budget,
              deliveredIn: userBid.deliveredIn,
              proposal: userBid.proposal,
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="flex items-center gap-2">
                <InfoCircleFilled className="text-blue-500 text-lg" />
                <p className="mt-0.5">
                  You will be able to edit your bid until the project is awarded to someone.
                </p>
              </div>
              <div className="flex justify-between gap-8 mt-5">
                <ApTextInput inputType="number" name="budget" label="Your Budget" />
                <ApTextInput
                  inputType="number"
                  name="deliveredIn"
                  label="This project will be delivered in"
                />
              </div>

              <div className="mt-5">
                <ApTextInput name="proposal" label="Describe your proposal" type="textarea" />
              </div>

              <div className="flex justify-end mt-5 gap-4">
                <ApButton loading={loading}>Edit Bid</ApButton>

                <ApButton
                  type="button"
                  // loading={loading}
                  outline
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </ApButton>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  )
}
