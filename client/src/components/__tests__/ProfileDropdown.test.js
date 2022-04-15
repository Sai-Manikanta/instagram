import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProfileDropdown from '../ProfileDropdown';

describe('ProfileDropdown', () => {
    test('should open profile nav list', () => {
        render(<ProfileDropdown />);

        const profileImage = screen.getByAltText('profile');
        fireEvent.click(profileImage);

        const profileDropdown = screen.getByTestId('profile-dropdown');
        expect(profileDropdown).toBeInTheDocument();
    })
})