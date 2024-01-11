import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { data } from '../Member/Form';
import {  useUpdateOperatorMutation } from '../../features/operator/apiSlice';
import { useFetchBranchAllQuery } from '../../features/branch/apiSlice';
import { FaArrowLeft } from 'react-icons/fa6';

const Form = () => {
  const [postOperator] = useUpdateOperatorMutation();
  const location = useLocation();
  const { email, name, branch, id } = location.state.data?.data;
  
  
  interface Initial {
    name_: string;
    email_: string;
    branchID_: number | string;
  }
  const InitialData: Initial = {
    name_: name,
    email_: email,
    branchID_: branch?.id,
  };

  const [formValue, setFormValue] = useState<Initial>(InitialData);
  const { name_, email_, branchID_ } = formValue;
  const { isSuccess, data, isError } = useFetchBranchAllQuery('');
  

  const [load, setLoad] = useState<boolean>(false);
  const postData = new FormData();
  const navigate = useNavigate();

  const btnDisabled = !name_ || !email_ || !branchID_;


  let content;
  let defaultBranch;

  if (isSuccess) {

    content = data?.data.map((item: data, index: number) => {
      return (
        <option key={index} selected={item.id === branch?.id} value={item.id}>
          {item.name}
        </option>
      );
    });

    defaultBranch = data?.data.find((item: any) => item.id === branch?.id);
  } else if (isError) {
    console.error('Error fetching data', 'Products Types');
  }
  

  const handleBranch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const branchNum = Number(e.target.value);

    setFormValue({ ...formValue, branchID_: branchNum });
  };

  const postSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {

    
    setLoad(true);
    e.preventDefault();
    console.log(InitialData, 'inintual');
    

    postData.append('branch_id', branchID_!.toString());
    postData.append('name', name_);
    postData.append('email', email_);


    try {
      if (postData) {
     
        
        await postOperator({postData, id}).unwrap().then((response) => {
            if (response) {

              navigate('/admin/servicesCreate');
            }
          });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };
  return (
    <>
      <form>
        <div className="space-y-12">
          <div className=" pb-12">
          <h2 className="mb-2 flex items-center space-x-4 font-semibold italic">
        Operator Edit: <span>{id}</span> <FaArrowLeft onClick={()=>window.history.back()} />
      </h2>

            <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="lg:col-span-3 col-span-6 ">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 "
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) =>
                      setFormValue({ ...formValue, name_: e.target.value })
                    }
                    value={name_}
                    placeholder="Name"
                    id="text"
                    name="text"
                    type="text"
                    className="block  pl-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="lg:col-span-3 col-span-6 ">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 "
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) =>
                      setFormValue({ ...formValue, email_: e.target.value })
                    }
                    value={email_}
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    className="block  pl-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 col-span-6">
                <label
                  htmlFor="branch"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Branch
                </label>
                <div className="mt-2">
                  <select
                    id="branch"
                    onChange={handleBranch}
                    name="branch"
                    autoComplete="branch"
                    className="block w-full rounded-md border-0 py-[11px]  shadow-sm ring-1 ring-inset    sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                   
                    {content}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={() => history.back()}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          {load ? (
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            <>
              <button
                onClick={postSubmit}
                disabled={btnDisabled}
                type="submit"
                className={`rounded-md ${
                  btnDisabled ? 'opacity-65' : 'opacity-100'
                }  bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-white
                 shadow-sm hover:bg-indigo-500 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                Update
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
