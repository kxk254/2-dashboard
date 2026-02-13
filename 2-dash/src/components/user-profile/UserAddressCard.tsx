"use client";

import React from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";

import Label from "../form/Label";

export default function UserAddressCard() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {};
  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <button></button>
        </div>
      </div>
      <Modal>
        <div>
          <div></div>
          <form>
            <div>
              <div>
                <div>
                  <Label>
                    <Input />
                  </Label>
                </div>
                <div>
                  <Label>
                    <Input />
                  </Label>
                </div>
                <div>
                  <Label>
                    <Input />
                  </Label>
                </div>
                <div>
                  <Label>
                    <Input />
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <button>Close</button>
              <button>Save Changes</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
