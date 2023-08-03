/* eslint-disable react/display-name */
import { forwardRef } from "react";

export const InputForm = forwardRef(
  (
    {
      error,
      inptType,
      inptId,
      textLabel,
      inptName,
      textarea = false,
      large = false,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`p-2 ${large ? "w-full" : "w-1/2"}`}>
        {/* TextArea */}
        {textarea ? (
          <div>
            <label className="text-sm font-medium leading-7 text-gray-600">
              {textLabel}
            </label>
            <textarea
              required={true}
              id={inptId}
              name={inptName}
              ref={ref}
              {...rest}
              className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-orange-500 focus:bg-white"
            />
          </div>
        ) : (
          <div>
            <label className="text-sm font-medium leading-7 text-gray-600">
              {textLabel}
            </label>
            <input
              required={true}
              type={inptType}
              id={inptId}
              name={inptName}
              ref={ref}
              {...rest}
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-orange-500 focus:bg-white"
            />
          </div>
        )}
        {/* Error Span */}
        {error && (
          <span role="alert" className="px-1 text-sm font-medium text-red-500">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

export default InputForm;
