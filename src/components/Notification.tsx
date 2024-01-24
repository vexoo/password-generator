import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";

const Notification: React.FC = () => {
  const message = useAppSelector(state => state.notification.message);
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const isError = false;

  useEffect(() => {
    setIsShowing(!!message);
  }, [message]);

  return (
    <Transition
      show={isShowing}
      as={Fragment}
      enter="ease-out duration-300 transition"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`pointer-events-auto fixed left-1/2 top-20 z-20 max-w-sm -translate-x-1/2 transform overflow-hidden rounded-lg 
				${isError ? "bg-rose-500" : "bg-blue-500"} 
				text-white shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <div className="p-2">
          <p className="text-1x text-center font-normal uppercase">{message}</p>
        </div>
      </div>
    </Transition>
  );
};

export default Notification;
